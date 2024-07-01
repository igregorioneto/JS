function calculateEmployeeSalary(employee) {
    // Calcular salário base
    let baseSalary = employee.baseSalary;
    
    // Calcular bônus por desempenho
    let performanceBonus = 0;
    if (employee.performance === 'excellent') {
        performanceBonus = baseSalary * 0.2;
    } else if (employee.performance === 'good') {
        performanceBonus = baseSalary * 0.1;
    }

    // Calcular bônus por tempo de serviço
    let tenureBonus = 0;
    if (employee.yearsWorked > 5) {
        tenureBonus = baseSalary * 0.05;
    }

    // Calcular deduções
    let deductions = 0;
    if (employee.absences > 2) {
        deductions = baseSalary * 0.03 * (employee.absences - 2);
    }

    // Calcular dedução de imposto
    let taxDeduction = 0;
    if (employee.taxBracket === 'high') {
        taxDeduction = baseSalary * 0.3;
    } else if (employee.taxBracket === 'medium') {
        taxDeduction = baseSalary * 0.2;
    } else if (employee.taxBracket === 'low') {
        taxDeduction = baseSalary * 0.1;
    }

    // Calcular salário final
    let finalSalary = baseSalary + performanceBonus + tenureBonus - deductions - taxDeduction;

    // Verificar se o salário final é menor que o salário mínimo
    const MINIMUM_WAGE = 1500;
    if (finalSalary < MINIMUM_WAGE) {
        finalSalary = MINIMUM_WAGE;
    }

    return finalSalary;
}
