Feature("API CHALLENGES");

Scenario("Get First Entity", ({ I }) => {
  I.sendGetRequest("/sim/entities/1");
  I.seeResponseCodeIs(200);
  I.seeResponseContainsJson({
    id: 1,
    name: "entity number 1",
    description: "",
  });
});
Scenario("Get Second Entity", ({ I }) => {
  I.sendGetRequest("/sim/entities/2");
  I.seeResponseCodeIs(200);
  I.seeResponseContainsJson({
    id: 2,
    name: "entity number 2",
    description: "",
  });
});
Scenario("Get No Existing Entity", ({ I }) => {
  I.sendGetRequest("/sim/entities/13");
  I.seeResponseCodeIs(404);
});
Scenario("Create an Entity", ({ I }) => {
  I.sendPostRequest("/sim/entities", { name: "bob" });
  I.seeResponseCodeIs(201);
  I.seeResponseContainsJson({
    id: 11,
    name: "bob",
    description: "",
  });
});
Scenario("Delete an Entity", ({ I }) => {
  I.sendDeleteRequest("/sim/entities/9");
  I.seeResponseCodeIs(204);
  I.sendGetRequest("/sim/entities/9");
  I.seeResponseCodeIs(404);
});
