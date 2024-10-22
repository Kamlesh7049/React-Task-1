import React, { useState } from 'react';

const SalaryCalculator = () => {
  const [basicSalary, setBasicSalary] = useState('');
  const [ta, setTa] = useState('');
  const [da, setDa] = useState('');
  const [hra, setHra] = useState('');
  const [totalSalary, setTotalSalary] = useState(0);
  const [tax, setTax] = useState(0);

  const calculateSalaryAndTax = (e) => {
    e.preventDefault();

    const basic = parseFloat(basicSalary) || 0;
    const travelAllowance = parseFloat(ta) || 0;
    const dearnessAllowance = parseFloat(da) || 0;
    const houseRentAllowance = parseFloat(hra) || 0;

    const total = basic + travelAllowance + dearnessAllowance + houseRentAllowance;
    setTotalSalary(total);

    let calculatedTax = 0;
    if (total >= 80000) {
      calculatedTax = total * 0.20;
    } else if (total >= 50000) {
      calculatedTax = total * 0.15;
    } else if (total >= 30000) {
      calculatedTax = total * 0.10;
    } else {
      calculatedTax = 0; 
    }

    setTax(calculatedTax);
  };

  return (
    <div style={{ padding: '20px', background: '#f9f9f9', borderRadius: '8px', maxWidth: '400px', margin: 'auto' }}>
      <h2>Salary Calculator</h2>
      <form onSubmit={calculateSalaryAndTax}>
        <div>
          <label>
            Basic Salary:
            <input
              type="number"
              value={basicSalary}
              onChange={(e) => setBasicSalary(e.target.value)}
              required
              style={{ marginLeft: '10px', width: '100%' }}
            />
          </label>
        </div>
        <div>
          <label>
            TA:
            <input
              type="number"
              value={ta}
              onChange={(e) => setTa(e.target.value)}
              required
              style={{ marginLeft: '10px', width: '100%' }}
            />
          </label>
        </div>
        <div>
          <label>
            DA:
            <input
              type="number"
              value={da}
              onChange={(e) => setDa(e.target.value)}
              required
              style={{ marginLeft: '10px', width: '100%' }}
            />
          </label>
        </div>
        <div>
          <label>
            HRA:
            <input
              type="number"
              value={hra}
              onChange={(e) => setHra(e.target.value)}
              required
              style={{ marginLeft: '10px', width: '100%' }}
            />
          </label>
        </div>
        <button type="submit" style={{ marginTop: '10px', padding: '10px', width: '100%', background: '#007BFF', color: '#fff', border: 'none', borderRadius: '4px' }}>
          Calculate
        </button>
      </form>
      {totalSalary > 0 && (
        <div style={{ marginTop: '20px' }}>
          <h3>Total Salary: ₹{totalSalary.toFixed(2)}</h3>
          <h3>Tax: ₹{tax.toFixed(2)}</h3>
        </div>
      )}
    </div>
  );
};

export default SalaryCalculator;