// import { TestBed } from '@angular/core/testing';

import { LoggerService } from "../Logger/logger.service"
import { CalculatorService } from "./calculator.service"

// import { CalculatorService } from './calculator.service';

// describe('CalculatorService', () => {
//   let service: CalculatorService;

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//     service = TestBed.inject(CalculatorService);
//   });

//   it('should be created', () => {
//     expect(service).toBeTruthy();
//   });
// });

describe('CalculatorService', () => {
  it('should add two numbers', () => {
    let loggerService = new LoggerService()
    spyOn(loggerService, 'log');
    const calculator = new CalculatorService(loggerService)
    let result = calculator.add(2, 2);
    expect(result).toBe(4)
    expect(loggerService.log).toHaveBeenCalledTimes(1);
  })

  it('should substract two numbers', () => {
    let loggerService = new LoggerService()
    const calculator = new CalculatorService(loggerService)
    let result = calculator.substract(10, 4);
    expect(result).toBe(6)


  })
})
