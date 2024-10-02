
import { SharedService } from './shared.service';
import { AddService } from './add.service';

describe('AddService', () => {

  it("should add but still showing the service instance output",() => {
    const shared = new SharedService();
    const calc = new AddService(shared);
    const result = calc.add(3,5);
    expect(result).toBe(8);
  })

  it("should call the shared logFunction with spyOn",() => {
    const shared = new SharedService();
    const calc = new AddService(shared);
    spyOn(shared,"logFunction");
    const result = calc.add(3,5);
    expect(shared.logFunction).toHaveBeenCalled();
  })

  it("should add with jasmine SPY object without service instance output",() => {
    const shared = jasmine.createSpyObj("SharedService",["logFunction"]);
    const calc = new AddService(shared);
    const result = calc.add(3,5);
    expect(result).toBe(8);

  })
});
