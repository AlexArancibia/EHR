// app/routes/api/email.ts
import { json } from "@remix-run/node";

export const loader = async () => {
  const exampleEmail = "example@example.com";

  // Devuelve un objeto JSON con el correo electrónico
  return json({
    message: "Email retrieved successfully",
    email: exampleEmail,
  });
};
