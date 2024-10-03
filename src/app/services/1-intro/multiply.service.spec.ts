import { MultiplyService } from './multiply.service';

describe('MultiplyService', () => {
  it('should multiply two numbers', () => {
    const service = new MultiplyService();
    const result = service.multiply(3,5);
    expect(result).toBe(15);
  });
});
