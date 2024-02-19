import React from 'react'

export default function ClientComponent() {
  return (
    <div className="w-full flex items-center justify-start">
            <span className="h-full flex justify-start items-center gap-2 px-2">
              <input
                type="checkbox"
                name="ClientselectAll"
                id="ClientselectAll"
                className="h-full"
              />
              <label htmlFor="ClientselectAll"></label>
            </span>
            <div className="w-full grid grid-cols-8">
              {/* all truncated values must have a tooltip on hover for full value */}
              <span className="truncate px-2">1</span>
              <span className="truncate px-2">Zama</span>
              <span className="truncate px-2">Phungula</span>
              <span className="truncate px-2">
                <a href="">www.Linkedin.com/Zamaphungula</a>
              </span>
              <span className="truncate px-2">zamaexamplep708@gmail.com</span>
              <span className="truncate px-2">zamaexamplefphungula@gmail.com</span>
              <span className="truncate px-2">067045645615</span>
              <span className="truncate px-2">067045645615</span>
            </div>
          </div>
  )
}
