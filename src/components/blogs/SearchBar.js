import React from 'react';

function SearchBar() {
  return (
        <div className="widget">
                  <h4 className="sidebar-title">Хайх</h4>
                     <div className="sidebar-search">
                        <form>
                          <input type="text" placeholder="Хайх ..." />
                          <button type="submit"><i className="fa fa-search" /></button>          
                        </form>          
                      </div>
          </div>
	  
  )
}

export default SearchBar;
