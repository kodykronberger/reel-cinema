import React, { useState } from 'react';
import {
  Dropdown,
  DropdownItem,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';
import movieSorting from 'services/movieSorting';
import './SortDropdown.scss';

const SortDropdown = ({ label = 'Select', onChange = sort => {} }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="d-inline-block float-right">
      <span className="sort-by-label d-inline-block mr-3">Sort By</span>
      <Dropdown
        className="sort-dropdown d-inline-block"
        isOpen={open}
        toggle={() => setOpen(prev => !prev)}
      >
        <DropdownToggle caret>{label}</DropdownToggle>
        <DropdownMenu>
          <DropdownItem onClick={() => onChange(null)}>(none)</DropdownItem>
          {Object.values(movieSorting.sortFunctions).map((sort, idx) => (
            <DropdownItem key={idx} onClick={() => onChange(sort)}>
              {sort.name}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
};

export default SortDropdown;
