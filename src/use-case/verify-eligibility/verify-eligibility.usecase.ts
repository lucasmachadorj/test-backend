import { Client } from '../../domain/client';
import { Connection } from '../../domain/connection';
import { Consumption } from '../../domain/consumption';
import { Document } from '../../domain/document';
import { EligibilityService } from '../../domain/eligibility-service';
import { TariffModality } from '../../domain/tariff-modality';
import { VerifyEligibilityCommand } from './verify-eligibility.command';
import { EligibilityResponse } from './verify-eligibility.response';

export class VerifyEligibility {
  execute({
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

    const client = Client.create({
      document,
      connectionType,
      tariffModality,
      consumption,
    });

    return EligibilityService.evaluate(client);
  }
}
