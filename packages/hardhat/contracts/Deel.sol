// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

interface IERC20Interface {
    function transferFrom(
        address _from,
        address _to,
        uint256 _value
    ) external returns (bool);

    function transfer(address _to, uint256 _value) external returns (bool);

    function approve(address _spender, uint256 _value) external returns (bool);

    function balanceOf(address _owner) external view returns (uint256);
}

contract HireHappy {
    enum Status {
        Active,
        Trial,
        Completed,
        Cancel
    }

    struct Employee {
        uint256 id;
        string name;
        address payable employer;
        address payable employee;
        uint256 monthlyAmountSalary;
        uint256 startDate;
        uint256 lastPaymentDate;
        Status status;
    }

    Employee[] public employeeList;
    mapping(address => uint256) public amountBalance;

    uint256 employeeId = 0;

    event NewRegisterEmployee(string name, string message);
    event SalaryPaid(uint256 employeeId, uint256 amount);
    IERC20Interface public tokenAddress;

    constructor(IERC20Interface _tokenAddress) {
        tokenAddress = _tokenAddress;
    }

    function buyEntry(uint256 _amount) public returns (bool) {
        uint256 senderBalance = tokenAddress.balanceOf(msg.sender);
        require(senderBalance >= _amount, "Insufficient Balance");

        bool success = tokenAddress.transferFrom(
            msg.sender,
            address(this),
            _amount
        );
        require(success, "Transfer Failed");

        return true;
    }

    function registerEmployee(
        address payable _employee,
        uint256 _monthlyAmountSalary,
        string memory _name
    ) external payable {
        require(
            msg.value >= _monthlyAmountSalary,
            "You must stake the deposit amount"
        );
        uint startDate = block.timestamp;

        Employee memory newEmployee;
        newEmployee.id = employeeId;
        newEmployee.name = _name;
        newEmployee.employer = payable(msg.sender);
        newEmployee.employee = _employee;
        newEmployee.monthlyAmountSalary = _monthlyAmountSalary;
        newEmployee.startDate = startDate;
        newEmployee.lastPaymentDate = startDate;
        newEmployee.status = Status.Trial;

        employeeList.push(newEmployee);
        amountBalance[address(newEmployee.employee)] += msg.value;
        employeeId++;
        emit NewRegisterEmployee(_name, "was registered correctly");
    }

    function cancelEmployee(uint256 _employeeId) external {
        require(_employeeId <= employeeList.length, "Invalid employee ID");

        Employee storage employee = employeeList[_employeeId];

        require(msg.sender == employee.employer, "Only owner access");

        if (block.timestamp < employee.startDate + (3 * 30 days)) {
            employee.status = Status.Cancel;
            // Ver como transferir balance
            amountBalance[address(employee.employer)] += employee
                .monthlyAmountSalary;
        } else {
            employee.status = Status.Cancel;
            amountBalance[address(employee.employee)] += employee
                .monthlyAmountSalary;
        }
    }

    function paySalary(uint256 _employeeId) external payable {
        require(_employeeId < employeeList.length, "Invalid employee ID");
        Employee storage employee = employeeList[_employeeId];
        require(
            msg.sender == employee.employer,
            "Only employer can pay salary"
        );

        require(
            msg.value >= employee.monthlyAmountSalary,
            "Insufficient salary amount"
        );

        employee.lastPaymentDate = block.timestamp;
        amountBalance[address(employee.employee)] += msg.value;

        emit SalaryPaid(_employeeId, msg.value);
    }

    function claimSalary(uint256 _employeeId) external {
        Employee storage employee = employeeList[_employeeId];

        require(
            msg.sender == employee.employee,
            "Only employee can claim salary"
        );

        if (block.timestamp >= employee.lastPaymentDate + 30 days) {
            // Transferir el monto del salario al empleado
            amountBalance[address(employee.employee)] += employee
                .monthlyAmountSalary;
            uint256 amountToTransfer = amountBalance[
                address(employee.employee)
            ];
            require(
                amountBalance[address(this)] >= amountToTransfer,
                "Insufficient contract balance"
            );
            payable(msg.sender).transfer(amountToTransfer);
            amountBalance[msg.sender] = 0;
            // Actualizar el estado del empleado a completado
            employee.status = Status.Cancel;
        } else {
            require(
                amountBalance[address(this)] >=
                    amountBalance[address(employee.employee)],
                "Insufficient contract balance"
            );
            payable(msg.sender).transfer(
                amountBalance[address(employee.employee)]
            );
            amountBalance[msg.sender] = 0;
        }
    }

    function getEmployees() external view returns (Employee[] memory) {
        uint256 count = 0;

        // Primero, determinamos cuántos empleados están asociados con msg.sender
        for (uint256 i = 0; i < employeeList.length; i++) {
            if (
                employeeList[i].employer == msg.sender ||
                employeeList[i].employee == msg.sender
            ) {
                count++;
            }
        }

        // Creamos un array para almacenar los empleados asociados con msg.sender
        Employee[] memory result = new Employee[](count);
        uint256 index = 0;

        // Llenamos el array con los empleados asociados con msg.sender
        for (uint256 i = 0; i < employeeList.length; i++) {
            if (
                employeeList[i].employer == msg.sender ||
                employeeList[i].employee == msg.sender
            ) {
                result[index] = employeeList[i];
                index++;
            }
        }

        return result;
    }
}
