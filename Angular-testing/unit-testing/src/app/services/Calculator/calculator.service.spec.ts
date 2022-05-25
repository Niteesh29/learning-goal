// import { TestBed } from '@angular/core/testing';

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
    const calculator = new CalculatorService()
    let result = calculator.add(2, 2);
    expect(result).toBe(4)
  })

  it('should substract two numbers', () => {
    const calculator = new CalculatorService()
    let result = calculator.substract(10, 4);
    expect(result).toBe(6)


  })
})
