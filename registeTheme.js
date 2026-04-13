
window.getBIEchartsDefaultTheme = function () {
    // 默认主题
    const echartsDefaultTheme = {
        color: [
            '#3293fb',
            '#82df2b',
            '#32c4fa',
            '#fcb530',
            '#fb6832',
            '#737cfd',
            '#1cd46b',
            '#b972fc',
            '#77d83f',
            '#fba344',
            '#f6bd4c',
        ],
        backgroundColor: 'rgba(0, 0, 0, 0)',
        textStyle: {},
        title: {
            textStyle: {
                color: '#111827',
            },
            subtextStyle: {
                color: '#6e7079',
            },
        },
        line: {
            itemStyle: {
                borderWidth: 1,
            },
            lineStyle: {
                width: '2',
            },
            symbolSize: '4',
            symbol: 'emptyCircle',
            smooth: true,
        },
        radar: {
            itemStyle: {
                borderWidth: 1,
            },
            lineStyle: {
                width: '2',
            },
            symbolSize: '4',
            symbol: 'emptyCircle',
            smooth: true,
        },
        bar: {
            itemStyle: {
                barBorderWidth: '0',
                barBorderColor: '#ccc',
            },
        },
        pie: {
            itemStyle: {
                borderWidth: '0',
                borderColor: '#ccc',
            },
        },
        scatter: {
            itemStyle: {
                borderWidth: '0',
                borderColor: '#ccc',
            },
        },
        boxplot: {
            itemStyle: {
                borderWidth: '0',
                borderColor: '#ccc',
            },
        },
        parallel: {
            itemStyle: {
                borderWidth: '0',
                borderColor: '#ccc',
            },
        },
        sankey: {
            itemStyle: {
                borderWidth: '0',
                borderColor: '#ccc',
            },
        },
        funnel: {
            itemStyle: {
                borderWidth: '0',
                borderColor: '#ccc',
            },
        },
        gauge: {
            itemStyle: {
                borderWidth: '0',
                borderColor: '#ccc',
            },
        },
        candlestick: {
            itemStyle: {
                color: '#eb5454',
                color0: '#47b262',
                borderColor: '#eb5454',
                borderColor0: '#47b262',
                borderWidth: 1,
            },
        },
        graph: {
            itemStyle: {
                borderWidth: '0',
                borderColor: '#ccc',
            },
            lineStyle: {
                width: 1,
                color: '#aaaaaa',
            },
            symbolSize: '4',
            symbol: 'emptyCircle',
            smooth: true,
            color: [
                '#3293fb',
                '#82df2b',
                '#32c4fa',
                '#fcb530',
                '#fb6832',
                '#737cfd',
                '#1cd46b',
                '#b972fc',
                '#77d83f',
                '#fba344',
                '#f6bd4c',
            ],
            label: {
                color: '#eeeeee',
            },
        },
        map: {
            itemStyle: {
                areaColor: '#eee',
                borderColor: '#444',
                borderWidth: 0.5,
            },
            label: {
                color: '#000',
            },
            emphasis: {
                itemStyle: {
                    areaColor: 'rgba(255,215,0,0.8)',
                    borderColor: '#444',
                    borderWidth: 1,
                },
                label: {
                    color: 'rgb(100,0,0)',
                },
            },
        },
        geo: {
            itemStyle: {
                areaColor: '#eee',
                borderColor: '#444',
                borderWidth: 0.5,
            },
            label: {
                color: '#000',
            },
            emphasis: {
                itemStyle: {
                    areaColor: 'rgba(255,215,0,0.8)',
                    borderColor: '#444',
                    borderWidth: 1,
                },
                label: {
                    color: 'rgb(100,0,0)',
                },
            },
        },
        categoryAxis: {
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#6E7079',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#6E7079',
                },
            },
            axisLabel: {
                show: true,
                color: '#111827',
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: ['#E0E6F1'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
                },
            },
        },
        valueAxis: {
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#6E7079',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#6E7079',
                },
            },
            axisLabel: {
                show: true,
                color: '#111827',
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#f2f2f2'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
                },
            },
        },
        logAxis: {
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#6E7079',
                },
            },
            axisTick: {
                show: false,
                lineStyle: {
                    color: '#6E7079',
                },
            },
            axisLabel: {
                show: true,
                color: '#111827',
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: ['#f2f2f2'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
                },
            },
        },
        timeAxis: {
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#f2f2f2',
                },
            },
            axisTick: {
                show: true,
                lineStyle: {
                    color: '#f2f2f2',
                },
            },
            axisLabel: {
                show: true,
                color: '#111827',
            },
            splitLine: {
                show: false,
                lineStyle: {
                    color: ['#E0E6F1'],
                },
            },
            splitArea: {
                show: false,
                areaStyle: {
                    color: ['rgba(250,250,250,0.2)', 'rgba(210,219,238,0.2)'],
                },
            },
        },
        toolbox: {
            iconStyle: {
                borderColor: '#505766',
            },
            emphasis: {
                iconStyle: {
                    borderColor: '#505766',
                },
            },
        },
        legend: {
            textStyle: {
                color: '#6b7280',
            },
        },
        tooltip: {
            axisPointer: {
                lineStyle: {
                    color: '#ccc',
                    width: '0',
                },
                crossStyle: {
                    color: '#ccc',
                    width: '0',
                },
            },
        },
        timeline: {
            lineStyle: {
                color: '#DAE1F5',
                width: 2,
            },
            itemStyle: {
                color: '#A4B1D7',
                borderWidth: 1,
            },
            controlStyle: {
                color: '#A4B1D7',
                borderColor: '#A4B1D7',
                borderWidth: 1,
            },
            checkpointStyle: {
                color: '#316bf3',
                borderColor: 'fff',
            },
            label: {
                color: '#A4B1D7',
            },
            emphasis: {
                itemStyle: {
                    color: '#FFF',
                },
                controlStyle: {
                    color: '#A4B1D7',
                    borderColor: '#A4B1D7',
                    borderWidth: 1,
                },
                label: {
                    color: '#A4B1D7',
                },
            },
        },
        visualMap: {
            color: ['#3293fb', '#38bdff'],
        },
        dataZoom: {
            handleSize: 'undefined%',
            textStyle: {},
        },
        markPoint: {
            symbolSize: 45,
            label: {
                color: 'rgba(25, 27, 30, 1)',
                fontSize: 13,
            },
            emphasis: {
                label: {
                    color: 'rgba(25, 27, 30, 1)',
                },
            },
        },
    }

    return echartsDefaultTheme;
}
