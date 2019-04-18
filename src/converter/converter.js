import React from "react";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import Paper from "@material-ui/core/Paper";
import Table from "../table/table";
import "./converter.css";

let obj_small = [
  { Name: "I", ID: 1 },
  { Name: "II", ID: 2 },
  { Name: "III", ID: 3 },
  { Name: "IV", ID: 4 },
  { Name: "V", ID: 5 },
  { Name: "VI", ID: 6 },
  { Name: "VII", ID: 7 },
  { Name: "VIII", ID: 8 },
  { Name: "IX", ID: 9 }
];

let obj_mid = [
  { Name: "X", ID: 10 },
  { Name: "XX", ID: 20 },
  { Name: "XXX", ID: 30 },
  { Name: "XL", ID: 40 },
  { Name: "L", ID: 50 },
  { Name: "LX", ID: 60 },
  { Name: "LXX", ID: 70 },
  { Name: "LXXX", ID: 80 },
  { Name: "XC", ID: 90 }
];

let obj_large = [
  { Name: "C", ID: 100 },
  { Name: "CC", ID: 200 },
  { Name: "CCC", ID: 300 },
  { Name: "CD", ID: 400 },
  { Name: "D", ID: 500 },
  { Name: "DC", ID: 600 },
  { Name: "DCC", ID: 700 },
  { Name: "DCCC", ID: 800 },
  { Name: "CM", ID: 900 }
];
let obj_extra = [
  { Name: "M", ID: 1000 },
  { Name: "MM", ID: 2000 },
  { Name: "MMM", ID: 3000 }
];

const inputProps = {
  min: 1,
  max: 3999,
  "aria-label": "преобразуйте число"
};

export default class Converter extends React.Component {
  createDigit(num) {
    if (
      num === "" ||
      num === null ||
      Number(num) > 3999 ||
      Number(num) < 0 ||
      Number(num) === 0
    ) {
      this.setState({
        convertedValue: `Введите число от 1 до 3999`
      });
      return;
    }
    let check = num.toString().length;
    let x = num.toString().split("");
    let fst, snd, thrd, frth;
    let a, b, c, d, result;

    switch (check) {
      case 4:
        fst = Number(x[0]) * 1000;
        snd = Number(x[1]) * 100;
        thrd = Number(x[2]) * 10;
        frth = Number(x[3]) * 1;

        for (let i = 0; i < obj_extra.length; i++) {
          if (obj_extra[i].ID === fst) {
            a = obj_extra[i].Name;
            break;
          }
        }

        for (let i = 0; i < obj_large.length; i++) {
          if (obj_large[i].ID === snd) {
            b = obj_large[i].Name;
            break;
          }
        }

        for (let i = 0; i < obj_mid.length; i++) {
          if (obj_mid[i].ID === thrd) {
            c = obj_mid[i].Name;
            break;
          }
        }

        for (let i = 0; i < obj_small.length; i++) {
          if (obj_small[i].ID === frth) {
            d = obj_small[i].Name;
            break;
          }
        }

        if (b === undefined) b = "";
        if (c === undefined) c = "";
        if (d === undefined) d = "";
        result = a + b + c + d;
        this.setState({
          convertedValue: `${num} = ${result}`
        });
        break;

      case 3:
        fst = Number(x[0]) * 100;
        snd = Number(x[1]) * 10;
        thrd = Number(x[2]) * 1;

        for (let i = 0; i < obj_large.length; i++) {
          if (obj_large[i].ID === fst) {
            a = obj_large[i].Name;
            break;
          }
        }

        for (let i = 0; i < obj_mid.length; i++) {
          if (obj_mid[i].ID === snd) {
            b = obj_mid[i].Name;
            break;
          }
        }

        for (let i = 0; i < obj_small.length; i++) {
          if (obj_small[i].ID === thrd) {
            c = obj_small[i].Name;
            break;
          }
        }

        if (b === undefined) b = "";
        if (c === undefined) c = "";
        result = a + b + c;
        this.setState({
          convertedValue: `${num} =  ${result}`
        });
        break;

      case 2:
        fst = Number(x[0]) * 10;
        snd = Number(x[1]) * 1;

        for (let i = 0; i < obj_mid.length; i++) {
          if (obj_mid[i].ID === fst) {
            a = obj_mid[i].Name;
            break;
          }
        }

        for (let i = 0; i < obj_small.length; i++) {
          if (obj_small[i].ID === snd) {
            b = obj_small[i].Name;
            break;
          }
        }

        if (b === undefined) b = "";
        result = a + b;
        this.setState({
          convertedValue: `${num} = ${result}`
        });
        break;

      case 1:
        fst = Number(x[0]) * 1;

        for (let i = 0; i < obj_small.length; i++) {
          if (obj_small[i].ID === fst) {
            a = obj_small[i].Name;
            break;
          }
        }

        this.setState({
          convertedValue: `${num} =  ${(result = a)} `
        });
    }
  }

  constructor(props) {
    super(props);
    this.state = {
      inputValue: null,
      convertedValue: null
    };
  }

  inputHandler = e => {
    this.setState({
      inputValue: e.target.value
    });
  };

  generate = e => {
    if (e.keyCode === 13) {
      this.createDigit(this.state.inputValue);
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.generate);
  }

  render() {
    return (
      <div className="container">
        <h1 className="title">Конвертер римских чисел</h1>
        <div className="elements">
          <Input
            className="input-item"
            type="number"
            onChange={this.inputHandler}
            id="rawData"
            inputProps={inputProps}
          />
          <Button
            color="primary"
            variant="contained"
            className="submit"
            onClick={() => this.createDigit(this.state.inputValue)}
          >
            Преобразовать
          </Button>
        </div>
        <Paper>
          <p className="output">{this.state.convertedValue}</p>
        </Paper>
        <Paper className="paper">
          Римские числа появились за 500 лет до нашей эры у эрусков. Они широко
          использовались в Древнем Риме и позднее в средневековой Европе вплоть
          до 14 века нашей эры. До сих пор мы можем их найти в обозначении веков
          или значимых дат, а также на циферблатах часов. В традиционной римской
          записи число состоит из латинских букв I, V, X, L, C, D и M. Каждая
          буква может повторяться в числе не более трёх раз подряд. Это значит,
          что максимальное число, которое можно записать, это MMMCMXCIX, то есть
          3999.
        </Paper>
        <Table />
      </div>
    );
  }
}
