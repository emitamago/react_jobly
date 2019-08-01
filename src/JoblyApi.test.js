import JoblyApi from "./JoblyApi"

it('it make ajax call to get all company', async () => {
    let response = await JoblyApi.getCompanies()
    expect(response.length).toEqual(50);
});

it('it make ajax call to get companies matched with search', async () => {
    let response = await JoblyApi.getCompanies("aya")
    expect(response.length).toEqual(1);
});

it('it returns empty array if there is no company matched', async () => {
    let response = await JoblyApi.getCompanies("0")
    expect(response.length).toEqual(0);
});

it('it make ajax call to get all jobs', async () => {
    let response = await JoblyApi.getJobs()
    expect(response.length).toEqual(200);
});

it('it make ajax call to get jobs matched with search', async () => {
    let response = await JoblyApi.getJobs("editor")
    expect(response.length).toEqual(2);
});

it('it returns empty array if there is no company matched', async () => {
    let response = await JoblyApi.getJobs("0")
    expect(response.length).toEqual(0);
});