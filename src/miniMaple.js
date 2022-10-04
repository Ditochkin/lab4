class MiniMaple
{
    constructor(polinoliam)
    {
        this.polinoliam = new String();
        this.polinoliam = polinoliam;
    }

    #checkPolinoliam()
    {
        let regex = /[/()=!]/;
        return regex.test(this.polinoliam);
    }

    #differentiateMem(member, variable)
    {
        let indexVariable = member.indexOf(variable);
        let newMember = "";
        
        if(member[indexVariable + 1] == "^")
        {
            let regDigit = /\d+/g;
            let leftStr =member.slice(0, indexVariable);
            let rightStr = member.slice(indexVariable + 2, member.length + 1);
            let deg = Number(rightStr);
            let matches = leftStr.match(regDigit);
           
            if (matches != undefined)
            {
                let newCoeff = Number(matches[0]) * deg;
                newMember = leftStr.replace(matches[0], newCoeff) + variable + "^" + (deg - 1);
            }
            else
            {
                newMember = deg + "*" + variable + "^" + (deg - 1);     
            }

            if (deg == 2)
            {
                newMember = newMember.slice(0, -2);
            }
        }
        else
        {
            newMember = member.slice(0, indexVariable - 1) + member.slice(indexVariable, -1);
            newMember = newMember == "" ? "1" : newMember; 
        }

        return newMember;
    }

    differentiate(variable)
    {
        if (this.#checkPolinoliam())
        {
            return undefined;
        }

        let curMem = "";
        let generalDiff = "";
        let sign = "";
        for (let i = 0; i < this.polinoliam.length; i++)
        {
            if (this.polinoliam[i] == "-" || this.polinoliam[i] == "+")
            {
                if (curMem.indexOf(variable) != -1)
                {
                    let diffMem = this.#differentiateMem(curMem, variable);
                    generalDiff += sign + diffMem;     
                }
                sign = this.polinoliam[i];
                curMem = "";
            }
            else
            {
                curMem += this.polinoliam[i];
            }
        }

        if (curMem.indexOf(variable) != -1)
            generalDiff += sign + this.#differentiateMem(curMem, variable);

        if (generalDiff[0] == "+")
            generalDiff = generalDiff.slice(1, generalDiff.length);

        return generalDiff;
    }
}

export {MiniMaple}