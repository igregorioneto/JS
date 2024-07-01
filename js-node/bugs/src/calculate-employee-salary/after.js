function calculateEmployeeSalary(employee) {
    const baseSalary = employee.baseSalary;
    const performanceBonus = calculatePerformanceBonus(baseSalary, employee.performance);
    const tenureBonus = calculateTenureBonus(baseSalary, employee.yearsWorked);
    const deductions = calculateDeductions(baseSalary, employee.absences)
    const taxDeduction = calculateTaxDeduction(baseSalary, employee.taxBracket);    
    let finalSalary = baseSalary + performanceBonus + tenureBonus - deductions - taxDeduction;

    const MINIMUM_WAGE = 1500;
    if (finalSalary < MINIMUM_WAGE) {
        finalSalary = MINIMUM_WAGE;
    }
    return finalSalary;
}

// Calcular bônus por desempenho
function calculatePerformanceBonus(baseSalary, performance) {
    if (performance === 'excellent') {
        return baseSalary * 0.2;
    } else if (performance === 'good') {
        return baseSalary * 0.1;
    }
    return baseSalary;
}

// Calcular bônus por tempo de serviço
function calculateTenureBonus(baseSalary, yearsWorked) {
    if (yearsWorked > 5) {
        return baseSalary * 0.05;
    }
    return 0;
}

// Calcular deduções
function calculateDeductions(baseSalary, absences) {
    if (absences > 2) {
        return baseSalary * 0.03 * (absences - 2);
    }
    return 0;
}

// Calcular dedução de imposto
function calculateTaxDeduction(baseSalary, taxBracket) {
    switch (taxBracket) {
        case 'high':
            return baseSalary * 0.3;
        case 'medium':
            return baseSalary * 0.2;
        case 'low':
            return baseSalary * 0.1;
        default:
            return 0;
    }
}

module.exports = {
    calculateEmployeeSalary,
    calculatePerformanceBonus,
    calculateTenureBonus,
    calculateDeductions,
    calculateTaxDeduction
}
