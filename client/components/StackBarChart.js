import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import { StackedBarChart } from 'react-native-chart-kit';
const StackBarChart = () => {
    const data = {
        labels: ['Week', '10Days', 'Month', 'Year'],
        legend: ['Apples', 'Bananas'],
        data: [
            [50, 30],
            [40, 60],
            [70, 10],
            [30, 40],
            [20, 60],
        ],
        barColors: ['#616471', '#3e89be'],
    };

    const chartConfig = {

        backgroundGradientFrom: '#ffffff',
        backgroundGradientTo: '#ffffff',
        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
        strokeWidth: 2,
        barPercentage: 1,
        propsForBackgroundLines: {
            stroke: 0,
        },

    };
    const screenWidth = Dimensions.get('window').width;
    return (

        <View>
            <StackedBarChart
                style={{
                    marginVertical: 6,
                    paddingBottom: 70,
                    // backgroundColor: 'yellow'
                }}
                hideLegend={true}
                yAxisLabel=''
                yAxisSuffix=" "
                data={data}
                width={screenWidth}
                height={180}
                chartConfig={chartConfig}
                withInnerLines={false}

            />
        </View>
    )
}

export default StackBarChart

const styles = StyleSheet.create({})