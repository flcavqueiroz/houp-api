import pagarme

pagarme.authentication_key('ak_test_wWCz5DhB73yJyoO5sYkMre2wEjFKib')

params = {
		"amount": "21000",
    "card_number": "4111111111111111",
    "card_cvv": "123",
    "card_expiration_date": "0922",
    "card_holder_name": "Morpheus Fishburne",
    "customer": {
      "external_id": "#3311",
      "name": "Morpheus Fishburne",
      "type": "individual",
      "country": "br",
      "email": "mopheus@nabucodonozor.com",
      "documents": [
        {
          "type": "cpf",
          "number": "30621143049"
        }
      ],
      "phone_numbers": ["+5511999998888", "+5511888889999"],
      "birthday": "1965-01-01"
    },
    "billing": {
      "name": "Trinity Moss",
      "address": {
        "country": "br",
        "state": "sp",
        "city": "Cotia",
        "neighborhood": "Rio Cotia",
        "street": "Rua Matrix",
        "street_number": "9999",
        "zipcode": "06714360"
      }
    },
    "shipping": {
      "name": "Neo Reeves",
      "fee": "1000",
      "delivery_date": "2000-12-21",
      "expedited": True,
      "address": {
        "country": "br",
        "state": "sp",
        "city": "Cotia",
        "neighborhood": "Rio Cotia",
        "street": "Rua Matrix",
        "street_number": "9999",
        "zipcode": "06714360"
      }
    },
    "items": [
      {
        "id": "r123",
        "title": "Red pill",
        "unit_price": "10000",
        "quantity": "1",
        "tangible": True
      },
      {
        "id": "b123",
        "title": "Blue pill",
        "unit_price": "10000",
        "quantity": "1",
        "tangible": True
      }
    ]
}

card_data = {
    "card_expiration_date": "1122",
    "card_number": "4018720572598048",
    "card_cvv": "123",
    "card_holder_name": "Cersei Lannister"
}

print (pagarme.card.create(card_data))



transfer_params = {
    'amount': '10000',
    'recipient_id': 'RECIPIENT_ID'
}

transfer = pagarme.transfer.create(transfer_params)

print (transfer)


trx = pagarme.transaction.create(params)

print(trx)

trx = pagarme.transaction.create(params)
print(trx)


balance = pagarme.balance.default_recipient_balance()
print(balance)