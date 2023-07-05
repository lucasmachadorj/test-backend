Feature: Verificar Eligibilidade

  Scenario: Elegibilidade é verificada e aprovada
    Given que o usuário preencheu todos os requisitos de elegibilidade
    When o sistema verifica a elegibilidade
    Then o sistema retorna que o usuário é elegível
    And o sistema calcula a economia anual de CO2