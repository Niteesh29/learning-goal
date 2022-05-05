import { StrengthPipe } from './strength.pipe';

describe('StrengthPipe', () => {
  it('create an instance', () => {
    const pipe = new StrengthPipe();
    expect(pipe).toBeTruthy();
  });

  describe('Strength Pipe', () => {
    it('should display weak if strength is 3', () => {
      //Arrange
      let pipe = new StrengthPipe();
      //Act
      let val = pipe.transform(3);
      //Assert
      expect(val).toEqual('3(weak)');
    })
  })
});
