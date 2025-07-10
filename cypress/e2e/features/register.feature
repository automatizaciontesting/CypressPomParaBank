Feature: Como usuario de ParaBank deseo realizar el registro en el sistema

  @registroExitoso
  Scenario: registro exitoso
    Given como usuario ParaBank deseo abrir la aplicacion web
    And realizo el registro de un cliente
    Then me encuentro logueado correctamente en la aplicacion
