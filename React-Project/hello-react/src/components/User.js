import PropTypes from "prop-types";

// döngülerde prop tanımlıysa eğer bir key value tanımlamamız gerekir.Bu key benzersiz olmalıdır yani her eleman için farklı olan bir özelik olmalı. id veya index gibi
function User({name , surname , isLoggedIn, age, friends, address}){

    if (!isLoggedIn) {
        return <div>Giriş Yapmadınız.</div>
    }

    return (
        <>
            <h1> {`${name} ${surname} ${age}`}</h1>

            {address.title}  {address.zip}
            <br></br>
            <br></br>

            {
                friends.map((friend, index) => <div key={index}>{index} - {friend}</div>)
            }

        </>
    );
}
//isRequired dersek bu prop valuesinin girilmesinin zorunlu oldugunu belirtmiş oluyoruz.
User.propTypes = {
    name : PropTypes.string.isRequired,
    surname : PropTypes.string.isRequired,
    isLoggedIn : PropTypes.bool.isRequired,
    age : PropTypes.number.isRequired,
    friends : PropTypes.array.isRequired,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number,
    })
}

User.defaultProps = {
    isLoggedIn : false
}

export default User