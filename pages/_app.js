import {
  BaseStyles,
  Box,
  FormControl,
  SSRProvider,
  TextInput,
  ThemeProvider,
} from "@primer/react";

const ThemedApp = () => {
  return (
    <Box>
      <FormControl>
        <FormControl.Label>Name</FormControl.Label>
        <TextInput />
      </FormControl>
    </Box>
  );
};

const App = () => {
  return (
    <SSRProvider>
      <ThemeProvider>
        <BaseStyles>
          <ThemedApp />
        </BaseStyles>
      </ThemeProvider>
    </SSRProvider>
  );
};
export default App;
