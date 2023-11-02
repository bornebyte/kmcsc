import React from 'react'
import getquote from './fetchquotes'
import Addquotescomponent from './addquotes'

const QuotesComponent = async () => {
  let quotes = await getquote()
  return (
    <div className='min-h-screen bg-gray-900 text-gray-400'>
      <div className='text-center text-white text-3xl font-bold my-4'>Quotes</div>
      <Addquotescomponent />
      {/* quotes div */}
      <div>
        <h2 className='text-white text-center text-2xl my-6'>Some Quotes To Feel Positive And Motivated</h2>
        {quotes.map((quote) => {
          return (
            <div className='card bg-gray-800 p-4 rounded-lg my-6' key={quote._id.toString()}>
              <div className="date my-2 mb-2">{quote.createdAt ? quote.createdAt.toLocaleString() : ''}</div>
              <div className="message">{quote.quote}</div>
              <div className="message">{quote.tags}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default QuotesComponent