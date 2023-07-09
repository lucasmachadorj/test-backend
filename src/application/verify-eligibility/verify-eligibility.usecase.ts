import {
  Client,
  Connection,
  Consumption,
  Document,
  EligibilityService,
  TariffModality,
} from '@/domain';
import { VerifyEligibilityCommand } from './verify-eligibility.command';
import { EligibilityResponse } from './verify-eligibility.response';

export class VerifyEligibility {
  static execute({
    numeroDoDocumento,
    tipoDeConexao,
    classeDeConsumo,
    modalidadeTarifaria,
    historicoDeConsumo,
  }: VerifyEligibilityCommand): EligibilityResponse {
    const document = Document.create(numeroDoDocumento);
    const connectionType = Connection.create(tipoDeConexao);
    const tariffModality = TariffModality.create(modalidadeTarifaria);
    const consumption = Consumption.create(classeDeConsumo, historicoDeConsumo);
    const eligibilityService = EligibilityService.create();

    const client = Client.create({
      document,
      connectionType,
      tariffModality,
      consumption,
    });

    return eligibilityService.evaluate(client);
  }
}
