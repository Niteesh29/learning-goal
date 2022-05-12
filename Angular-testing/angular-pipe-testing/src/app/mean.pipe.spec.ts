import { MeanPipe } from './mean.pipe';

describe('MeanPipe', () => {
  let pipe
  beforeEach(() => {
    pipe = new MeanPipe()
  })
  it('create an instance', () => {
    pipe = new MeanPipe();
    expect(pipe).toBeTruthy();
  });

  describe('Bad inputs', () => {
    it('should return the object', () => {
      const actual = pipe.transform({ a: ' a' } as any)
      expect(actual).toEqual({ a: ' a' } as any)
    })

    it('should return null', () => {
      expect(pipe.transform(null)).toEqual(null)
    })

    it('should return undefined', () => {
      expect(pipe.transform([])).toEqual(undefined)
    })
  })

  describe('Mean Calculation', () => {
    it('should return 1', () => {
      expect(pipe.transform([1])).toEqual(1)
    })

    it('should return 0', () => {
      expect(pipe.transform([1, -1])).toEqual(0)
    })

    it('should return 1', () => {
      expect(pipe.transform([1, 1])).toEqual(1)
    })

    it('should return -1', () => {
      expect(pipe.transform([-1, -1])).toEqual(-1)
    })

    it('should return 4', () => {
      expect(pipe.transform([3, 3, 6])).toEqual(4)
    })

  })
});
