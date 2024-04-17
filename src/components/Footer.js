import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <footer>
      <div class="container">
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3  ">
          <div class="col-md-4 d-flex align-items-center">
            <a
              href="/"
              class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
            >
              <i class="fa-brands fa-instagram" width="36" height="36"></i>
            </a>
            <span class="text-muted">© 2021 Company, Inc</span>
          </div>

          <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
            <li class="ms-3">
              <a class="text-muted" href="#">
                <i class="fa-brands fa-facebook-f" width="36" height="36"></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="#">
                <i class="fa-brands fa-instagram" width="36" height="36"></i>
              </a>
            </li>
            <li class="ms-3">
              <a class="text-muted" href="#">
                <i class="fa-brands fa-tiktok" width="36" height="36"></i>
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </footer>
  );
};

export default Footer;
