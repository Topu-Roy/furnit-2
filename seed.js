/**
 * Seeds data to the database by making a POST request to the API.
 * This function expects an admin user email in the request body
 * that satisfies the schema defined by `seedRouteSchema`.
 *
 * @returns {Promise<void>} A promise that resolves when seeding completes.
 */
async function seedData() {
  try {
    const response = await fetch("http://localhost:3000/api/seed-db", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      /**
       * The request body, including the admin user email.
       */
      body: JSON.stringify({ userEmail: "topuroy143333@gmail.com" }), //! Make sure the user is an Admin
    });

    /**
     * The response data from the API.
     * @type {Awaited<{ message: string }>}
     */
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const data = await response.json();

    if (!response.ok) {
      console.error("Seeding failed:", data);
      process.exit(1);
    } else {
      console.log("Seeding success:", data.message);
    }
  } catch (error) {
    console.error("Error connecting to seed API", error);
    process.exit(1);
  }
}

void seedData();
