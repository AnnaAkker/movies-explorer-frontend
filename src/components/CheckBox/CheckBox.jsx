import './CheckBox.css';


export default function CheckBox() {
    return (
        <div className="checkbox">
                <div className="checkbox__container">
                    <input type="checkbox" className="checkbox__input" name="checkbox__input" id="checkboxinput" tabIndex="0" defaultChecked/>
                    <label className="checkbox__label" htmlFor="checkboxinput">
                        <span className="checkbox__inner" />
                        <span className="checkbox__switch" />
                    </label>
                </div>
                < p className="checkbox__text">Короткометражки</p>
        </div>
    )
}