context("SignUp", () => {
  it("Enters the landing page and tries to go the sign up page", () => {
    cy.visit("http://localhost:3000/");
    cy.viewport(1440, 900);

    cy.contains("Cadastre-se").click();
  });

  it("Tries to register a new user", () => {
    cy.viewport(1440, 900);

    cy.intercept("POST", "/users", {
      statusCode: 201,
      body: {
        id: "c110dbb6-beb9-4682-ab63-2c12a570d66b",
        name: "John Doe",
        email: "emaildoidodoido@email.com",
        course_module: "Segundo Módulo (Frontend avançado)",
        bio: "Lorem ipsum dolor emet",
        contact: "linkedin/in/johndoe",
        created_at: "2020-12-05T14:38:02.019Z",
        updated_at: "2020-12-05T14:38:02.019Z",
        avatar_url: null,
      },
    }).as("new-user");

    cy.get("input[name=name").type("John Doe");
    cy.get("input[name=email").type("emaildoidodoido@email.com");
    cy.get("input[name=password").type("1234567");
    cy.get("input[name=confirmPassword").type("1234567");
    cy.get("input[name=bio").type("Lorem ipsum dolor emet");
    cy.get("input[name=contact").type("linkedin/in/johndoe");
    cy.get("select[name=course_module").type(
      "Segundo Módulo (Frontend avançado)"
    );
    cy.get("button[type=submit]").click();

    cy.contains("Entrar");
  });
});
