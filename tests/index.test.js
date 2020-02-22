import project from '../src'
it("Should be ok", function() {
  //
  expect(project).toMatchSnapshot();
});
