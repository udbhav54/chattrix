import { Grid, Skeleton, Stack } from "@mui/material";

export const LayoutLoader = () => (
  <Grid container spacing={2} sx={{ height: "calc(100vh - 4rem)" }}>
    {/* LEFT */}
    <Grid
      size={{ sm: 4, md: 3 }}
      sx={{ display: { xs: "none", sm: "block" }, height: "100%" }}
    >
      <Skeleton variant="rectangular" height="100%" />
    </Grid>

    {/* CENTRE */}
    <Grid size={{ xs: 12, sm: 8, md: 5, lg: 6 }} sx={{ height: "100%" }}>
      <Stack spacing={2}>
        {Array.from({ length: 10 }).map((_, i) => (
          <Skeleton key={i} variant="rounded" height="5rem" />
        ))}
      </Stack>
    </Grid>

    {/* RIGHT */}
    <Grid
      size={{ md: 4, lg: 3 }}
      sx={{ display: { xs: "none", md: "block" }, height: "100%" }}
    >
      <Skeleton variant="rectangular" height="100%" />
    </Grid>
  </Grid>
);
