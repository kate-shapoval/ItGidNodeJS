const salaries = {
    Progger: { // specialization type 'Progger'
        salary: 1000, // salary after tax; should be integer; min: 100, max: 100000
        tax: "15%" // tax percent; presented as a string with template `{tax}%` where 'tax' is an integer;  min: "0%", max: "99%"
    },
    Tester: {
        salary: 1000,
        tax: "10%"
    }
}
const team = [
    {
        name: "Masha", // name of team member
        specialization: "Progger" // specialization should be picked from `salaries` otherwise member should be ignored in the report
    },
    {
        name: "Vasya",
        specialization: "Tester"
    },
    {
        name: "Taras",
        specialization: "Tester"
    },
]
const salaries1 = {
    Manager: { salary: 1000, tax: "10%" },
    Designer: { salary: 600, tax: "30%" },
    Artist: { salary: 1500, tax: "15%" },
}
const team1 = [
    { name: "Misha", specialization: "Manager" },
    { name: "Max", specialization: "Designer" },
    { name: "Vova", specialization: "Designer" },
    { name: "Leo", specialization: "Artist" },]

const salaries2 = {
    TeamLead: { salary: 1000, tax: "99%" },
    Architect: { salary: 9000, tax: "34%" },
}
const team2 = [
    { name: "Alexander", specialization: "TeamLead" },
    { name: "Gaudi", specialization: "Architect" },
    { name: "Koolhas", specialization: "Architect" },
    { name: "Foster", specialization: "Architect" },
    { name: "Napoleon", specialization: "General" },]

function calculateTeamFinanceReport(salaries, team) {
    let report = {
        totalBudgetTeam: 0
    }
    if (team && salaries) {
        let teamReport = team.map((item) => item.specialization);
        let specialization = new Set(teamReport);
        specialization.forEach(
            (item) => {
                let count = 0 || teamReport.filter((itemTeam) => itemTeam === item).length;
                if (salaries[item]) {
                    let sallaryAddTax = (salaries[item]?.salary * 100) / (100 - Number.parseInt(salaries[item].tax));
                    let allSallaries = Math.round(sallaryAddTax * count);
                    report.totalBudgetTeam += allSallaries;
                    return report[`totalBudget${item}`] = allSallaries;
                }
            })
    }
    return report;
}
const financeReport = calculateTeamFinanceReport(salaries, team)
console.log(JSON.stringify(financeReport))
const financeReport1 = calculateTeamFinanceReport(salaries1, team1)
console.log(JSON.stringify(financeReport1))
const financeReport2 = calculateTeamFinanceReport(salaries2, team2)
console.log(JSON.stringify(financeReport2))


