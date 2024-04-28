const { getGoatFacts } = require("../src/getGoatFacts");

test('test response from getGoatFacts', async () => {
    window.fetch = mockFetch(JSON.parse('{"data":["Goats dont have to worry about whether or not its HIPAA compliant.", "There is no Goat Ops."],"status":200}'));
    const resp = await getGoatFacts()
    expect(resp).toHaveProperty('data');
    expect(resp.data).toHaveLength(2);
});


function mockFetch(data) {
    return jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => data,
      }),
    );
}