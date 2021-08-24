import { Grid } from "@material-ui/core";
import React from "react";
import { Tooltip, Pie, PieChart } from "recharts";
import { questionAnswer } from "../../helpers/types/questionAnswer";

type questionChartParams = {
    answers: questionAnswer[];
};

const answersInitialState = [
    { name: "Si", value: 0 },
    { name: "No", value: 0 },
    { name: "Me abstengo", value: 0 },
];

export const QuestionsChart = ({ answers }: questionChartParams) => {

    const data = answers.reduce((prevValue, currentValue) => {
        if (currentValue.aswer === "Si") prevValue[0].value++;
        if (currentValue.aswer === "No") prevValue[1].value++;
        if (currentValue.aswer === "Me abstengo") prevValue[2].value++;
        return prevValue;
    }, answersInitialState);

    return (
        <Grid>
            <PieChart width={400} height={400}>
                <Pie
                    dataKey="value"
                    isAnimationActive={false}
                    data={data}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    label
                />
                <Tooltip />
            </PieChart>
        </Grid>
    );
};
