import { Grid, Paper } from "@mantine/core";

const Widgets = () => (
  <Grid
    columns={2}
    gutter="md"
    grow
  >
    {[1, 2, 3].map((item, index) => (
      <Grid.Col span={1}>
        <Paper
          withBorder
          span={1}
          sx={{ height: '100%' }}
        >
          Widget content
        </Paper>
      </Grid.Col>
    ))}
  </Grid>
);
 
export default Widgets;
