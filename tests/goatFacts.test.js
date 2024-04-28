const { goatFacts } = require('../server/libs/goatsLib');

let facts;
beforeAll(async () => {
    facts = await goatFacts();
});

test('goatFacts returns 20 facts', async () => {
    expect(facts).toHaveLength(20);
});


test('goatFacts returns random facts, not the same ones', async () => {
    let dup_count = 1
    for (let i = 1; i < facts.length; i++) {
        if (facts[i] == facts[0]) {
            dup_count++;
        }
    }

    expect(dup_count).toBeLessThan(facts.length)
});