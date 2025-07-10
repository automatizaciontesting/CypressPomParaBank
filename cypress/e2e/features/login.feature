Feature: Como usuario de la aplicación ParaBank

  @loginExitoso
  Scenario: login exitoso
    Given como usuario ParaBank deseo abrir la aplicacion web
    When ingreso las credenciales de usuario
    |user|password|
    | hcamargo1   |    hcamargo1    |
    Then me encuentro logueado correctamente en la aplicacion