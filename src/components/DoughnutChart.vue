<script>
    import { Doughnut } from 'vue-chartjs';

    // eslint-disable-next-line no-undef
    Chart.Tooltip.positioners.custom = (elements) => {
        if (!elements.length) {
            return false;
        }

        let width = elements[0]._chart.chartArea.right / 4;
        let height = elements[0]._chart.chartArea.bottom / 4;

        return {
            width: width,
            height: height,
            x: elements[0]._chart.chartArea.right / 2 - width,
            y: elements[0]._chart.chartArea.bottom / 2
        }
    }

    export default {
        extends: Doughnut,
        name: "DoughnutChart",
        props: ['chartdata', 'options'],
        mounted () {
            this.renderChart(this.chartdata, this.options)
        }
    }
</script>