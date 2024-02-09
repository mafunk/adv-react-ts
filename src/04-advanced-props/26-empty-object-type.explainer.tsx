const Component = (props: { config: Record<string, unknown> }) => {
  return <div />;
};

/**
 * Why can I pass _anything_ to config?
 */
<>
  <Component
    config={{
      foo: "bar",
      whatever: {},
    }}
  />
</>;
