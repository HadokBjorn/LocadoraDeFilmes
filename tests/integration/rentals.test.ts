import app from "app";
import supertest from "supertest";


const server = supertest(app);

describe("Rentals Service Unit Tests", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  })
})

describe("GET Rentals", () => {
  it("should return a list of rentals", async() => {
    const {status, body} = await server.get("/rentals")
    
    expect(status).toBe(200);

    expect(body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          date: expect.any(Date),
          endDate: expect.any(Date),
          userId: expect.any(Number),
          closed: expect.any(Boolean),
        })
      ])
    )
  })
})