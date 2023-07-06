Feature: Verificar Eligibilidade

  Scenario: Elegibilidade é verificada e aprovada
    Given que o usuário preencheu todos os requisitos de elegibilidade
    When o sistema verifica a elegibilidade
    Then o sistema retorna que o usuário é elegível
    And o sistema calcula a economia anual de CO2

  Scenario: Elegibilidade é verificada e negada
    Given que o usuário apresenta classe de consumo "rural" e a modalidade tarifária é "verde"
    When o sistema verifica a elegibilidade
    Then o sistema retorna que o usuário não é elegível
    And o sistema não calcula a economia anual de CO2
    And o sistema retorna a mensagem de erro "Classe de consumo não aceita"
    And o sistema retorna a mensagem de erro "Modalidade tarifária não aceita"