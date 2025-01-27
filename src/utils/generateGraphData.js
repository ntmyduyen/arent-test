const generateGraphData = (bodyWeightArr, bodyFatArr) => {
    return [
        {
            label: 'Body Weight',
            data: bodyWeightArr,
            borderColor: '#FFCC21',
            backgroundColor: '#FFCC21',
        },
        {
            label: 'Body Fat',
            data: bodyFatArr,
            borderColor: '#8FE9D0',
            backgroundColor: '#8FE9D0',
        }
    ]
}

export default generateGraphData