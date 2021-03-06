import React from 'react';

const Header = (props) => (
  <nav className="vec-w-screen vec-h-20 vec-px-12 vec-py-4 vec-bg-white vec-flex vec-items-center vec-shadow vec-justify-between">
    <div className="vec-flex vec-items-center">
      <Logo />
      <Category name="Agenda" />
      <Category name="Categorias" />
      <Category name="Criadores" />
      <Category name="Sobre Nós" />
    </div>
    <div className="vec-flex vec-items-center">
      <UserInfo />
    </div>
  </nav>
);

const Logo = () => (
  <div className="vec-bg-gray-200 vec-w-32 vec-h-12 vec-mr-12">LOGO</div>
);

const Category = ({ name, links }) => (
  <div className="vec-mr-16 vec-flex">
    {name}
    {links && links.length > 0 && (
      <svg
        className="vec-ml-1 vec-w-4 vec-fill-current vec-text-gray-500"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    )}
  </div>
);

// const SearchInput = () => (
//   <input
//     className="vec-border vec-border-solid vec-border-gray-400 vec-rounded-full vec-py-2 vec-px-8 vec-outline-none vec-w-64 vec-mr-12"
//     placeholder="Pesquisa..."
//   />
// );

// const Donations = () => (
//   <div className="vec-flex vec-items-center vec-mr-6">
//     <div className="vec-text-red-600 vec-pr-2 vec-mr-2 vec-border-r vec-border-red-600">
//       <div className="vec-text-xs">Donativos Angariados</div>
//       <div className="vec-text-xl vec-text-right">7 789 €</div>
//     </div>
//     <div className="vec-w-10 vec-h-10 vec-bg-red-600"></div>
//   </div>
// );

const UserInfo = () => (
  <div className="vec-border vec-border-gray-400 vec-rounded-full vec-h-8 vec-w-8 vec-flex vec-items-center vec-justify-center">
    U
  </div>
);

export default Header;
