import React, { Component } from "react";
import PropTypes from "prop-types";
import { FaPhone, FaEnvelope } from "react-icons/fa";

const propTypes = {
  data: PropTypes.string.isRequired,
  icon: PropTypes.bool,
  spacing: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
  customType: PropTypes.oneOf(["phone", "email"])
};

const defaultProps = {
  icon: false,
  spacing: "xs"
};

class ContactLink extends Component {
  constructor(props) {
    super(props);
    this.buildContactLink = this.buildContactLink.bind(this);
    this.setIcon = this.setIcon.bind(this);
    this.setLink = this.setLink.bind(this);
    this.formatPhoneNumber = this.formatPhoneNumber.bind(this);
    this.state = {
      currentType: null,
      iconRender: null,
      linkRender: null
    };
  }

  buildContactLink() {
    const { customType, data } = this.props;

    let type;

    if (!customType) {
      if (data.includes("@") || data.includes(".com")) {
        type = "email";
      } else {
        type = "phone";
      }
    } else {
      type = customType;
    }

    this.setState(
      {
        currentType: type
      },
      () => {
        this.setIcon();
        this.setLink();
      }
    );
  }

  setIcon() {
    const { icon } = this.props;
    const { currentType } = this.state;

    let iconRender;
    const iconClasses = "icon";

    if (icon) {
      switch (currentType) {
        case "phone":
          iconRender = <FaPhone className={iconClasses} />;
          break;
        case "email":
          iconRender = <FaEnvelope className={iconClasses} />;
          break;
        default:
          iconRender = null;
      }
    } else {
      iconRender = null;
    }

    this.setState({
      iconRender
    });
  }

  setLink() {
    const { data } = this.props;
    const { currentType } = this.state;

    let linkRender;

    if (currentType === "email") {
      const href = `mailto:${data}`;

      linkRender = <a href={href}>{data}</a>;
    }

    if (currentType === "phone") {
      const phoneNumber = this.formatPhoneNumber(data);
      let href = "tel:";

      if (phoneNumber.includes("+1")) {
        href += "+" + phoneNumber.replace(/\D/g, "");
      } else {
        href += "+1" + phoneNumber.replace(/\D/g, "");
      }

      linkRender = <a href={href}>{phoneNumber}</a>;
    }

    this.setState({
      linkRender
    });
  }

  formatPhoneNumber(data) {
    const cleaned = ("" + data).replace(/\D/g, "");
    const match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = match[1] ? "+1 " : "";
      return [intlCode, "(", match[2], ") ", match[3], "-", match[4]].join("");
    }
    return null;
  }

  componentDidMount() {
    this.buildContactLink();
  }

  render() {
    const { spacing } = this.props;
    const { iconRender, linkRender } = this.state;

    return (
      <div className={`contactLink contactLink-${spacing}`}>
        {iconRender}
        {linkRender}
      </div>
    );
  }
}

ContactLink.propTypes = propTypes;
ContactLink.defaultProps = defaultProps;

export default ContactLink;
