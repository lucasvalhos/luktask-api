import jwt from "jwt-simple";

describe("Routes: Users", () => {
  
  const Users = app.db.models.Users;
  const jwtSecret = app.libs.config.jwtSecret;

  let token;

  beforeEach(done => {
    Users
      .destroy({where:{}})
      .then(() => Users.create({
        name: 'Lucas Valhos',
        email: 'lucas@valhos.com',
        password: '123'
      }).then(user => {

        token = jwt.encode({id: user.id}, jwtSecret);
        done();
        
      }));
  });

  describe("GET /user", () => {
    describe("status 200", () => {
      it("returns an authenticated user", done => {
        request.get("/user")
          .set("Authorization", "JWT "+ token)
          .expect(200)
          .end((err, res) => {
            expect(res.body.name).to.eql("Lucas Valhos");
            expect(res.body.email).to.eql("lucas@valhos.com");
            done(err);
          });
      });
    });
  });

  describe("DELETE /user", () => {
    describe("status 204", () => {
      it("deletes an anthenticated user", done => {
        request.delete('/user')
          .set("Authorization", "JWT "+ token)
          .expect(204)
          .end((err, res) => done(err));
      });
    });
  });

  describe("POST /user", () => {
    describe("status 200", () => {
      it("creates a new user", done => {
        request.post('/users')
          .send({
            name: "Mary",
            email: "mary@mail.net",
            password: "12345"
          })
          .expect(200)
          .end((err, res) => {
            expect(res.body.name).to.eql("Mary");
            expect(res.body.email).to.eql("mary@mail.net");
            done(err);
          });
      });
    });
  });

  

});