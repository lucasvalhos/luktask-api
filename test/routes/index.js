describe("Routes: Index", () => {
  describe("GET /", () => {
    it("returns the API Status", done => {
      request
        .get("/")
        .expect(200)
        .end( (err, res) => {
          const expected = {
            status: "LukTask API"
          };

          expect(res.body).to.eql(expected);

          done(err);
        });
    });
  });
});