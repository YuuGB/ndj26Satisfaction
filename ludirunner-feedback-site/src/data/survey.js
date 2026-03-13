export const surveyResponses = [];

export function submitResponse(response) {
    surveyResponses.push(response);
}

export function getAggregatedResults() {
    const totalResponses = surveyResponses.length;
    const aggregatedResults = surveyResponses.reduce((acc, response) => {
        for (const key in response) {
            if (acc[key]) {
                acc[key] += response[key];
            } else {
                acc[key] = response[key];
            }
        }
        return acc;
    }, {});

    return {
        totalResponses,
        aggregatedResults
    };
}