import React from "react";
import styles from "./GeneratorFlow.module.css";
import Container from "../Container/Container";

type FeatureItem = {
    title: string;
    img: string;
    description: JSX.Element;
};

const featureList: FeatureItem[] = [
    {
        title: "React",
        img: "img/react-color.png",
        description: (
            <>
                React template file <b>jsx</b> or <b>tsx</b> depending on your
                specific needs for the project.
            </>
        ),
    },
    {
        title: "Style",
        img: "img/css-color.png",
        description: (
            <>
                Style file based on the provided CSS preprocessor (e.g.,{" "}
                <b>CSS</b>,<b>PCSS</b>, <b>SCSS</b>, etc.).
            </>
        ),
    },
    {
        title: "Storybook",
        img: "img/storybookjs.png",
        description: (
            <>
                Story file to test the UI of the component and explore its
                various states.
            </>
        ),
    },
    {
        title: "Test",
        img: "img/test-color.png",
        description: (
            <>
                Test file to validate component functionality, supporting all
                React-compatible test frameworks.
            </>
        ),
    },
];

const GeneratorFlow = () => {
    return (
        <Container
            gridTemplateColumns="repeat(1, 1fr)"
            flexDirection="column"
            className={styles.generatorContainer}
        >
            <svg
                width="1296"
                height="432"
                viewBox="0 0 1296 432"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <rect
                    x="532"
                    y="171"
                    width="200"
                    height="70"
                    rx="15"
                    fill="#1B1818"
                />
                <path
                    d="M590.302 202.562C590.131 202.024 589.9 201.541 589.61 201.115C589.326 200.683 588.985 200.316 588.589 200.014C588.192 199.706 587.739 199.473 587.23 199.313C586.727 199.153 586.174 199.073 585.57 199.073C584.546 199.073 583.623 199.337 582.8 199.863C581.978 200.39 581.327 201.162 580.847 202.18C580.374 203.192 580.137 204.432 580.137 205.9C580.137 207.374 580.377 208.62 580.856 209.638C581.336 210.656 581.993 211.428 582.827 211.955C583.662 212.482 584.612 212.745 585.677 212.745C586.665 212.745 587.526 212.544 588.26 212.141C589 211.739 589.571 211.171 589.974 210.437C590.382 209.697 590.586 208.827 590.586 207.827L591.297 207.96H586.094V205.696H593.241V207.765C593.241 209.292 592.915 210.617 592.264 211.742C591.619 212.86 590.725 213.725 589.583 214.334C588.447 214.944 587.145 215.249 585.677 215.249C584.031 215.249 582.587 214.87 581.344 214.112C580.107 213.355 579.143 212.28 578.45 210.89C577.758 209.493 577.412 207.836 577.412 205.918C577.412 204.468 577.613 203.166 578.015 202.012C578.418 200.858 578.983 199.878 579.711 199.073C580.445 198.262 581.306 197.644 582.294 197.218C583.289 196.786 584.375 196.57 585.553 196.57C586.535 196.57 587.449 196.715 588.296 197.005C589.148 197.295 589.906 197.706 590.569 198.239C591.237 198.771 591.791 199.405 592.229 200.138C592.667 200.866 592.963 201.674 593.116 202.562H590.302ZM602.387 215.275C601.044 215.275 599.887 214.988 598.916 214.414C597.951 213.834 597.205 213.02 596.679 211.973C596.158 210.919 595.897 209.685 595.897 208.271C595.897 206.874 596.158 205.643 596.679 204.577C597.205 203.512 597.939 202.681 598.88 202.083C599.827 201.485 600.934 201.186 602.201 201.186C602.97 201.186 603.716 201.313 604.438 201.568C605.16 201.822 605.808 202.222 606.382 202.766C606.956 203.311 607.409 204.018 607.741 204.888C608.072 205.752 608.238 206.803 608.238 208.04V208.981H597.398V206.992H605.636C605.636 206.294 605.494 205.675 605.21 205.137C604.926 204.592 604.527 204.163 604.012 203.849C603.503 203.536 602.905 203.379 602.218 203.379C601.473 203.379 600.822 203.562 600.265 203.929C599.715 204.29 599.289 204.764 598.987 205.35C598.691 205.93 598.543 206.56 598.543 207.241V208.794C598.543 209.706 598.703 210.481 599.022 211.12C599.348 211.76 599.801 212.248 600.381 212.585C600.961 212.917 601.638 213.082 602.414 213.082C602.917 213.082 603.376 213.011 603.79 212.869C604.204 212.721 604.562 212.502 604.864 212.212C605.166 211.922 605.397 211.564 605.557 211.138L608.069 211.591C607.868 212.331 607.507 212.979 606.986 213.535C606.471 214.086 605.823 214.515 605.042 214.822C604.266 215.124 603.381 215.275 602.387 215.275ZM613.837 206.903V215H611.183V201.364H613.731V203.583H613.9C614.213 202.861 614.704 202.281 615.373 201.843C616.048 201.405 616.897 201.186 617.921 201.186C618.85 201.186 619.664 201.381 620.363 201.772C621.061 202.157 621.603 202.731 621.987 203.494C622.372 204.258 622.564 205.202 622.564 206.326V215H619.91V206.646C619.91 205.658 619.652 204.885 619.137 204.329C618.623 203.767 617.915 203.485 617.016 203.485C616.4 203.485 615.853 203.619 615.373 203.885C614.9 204.151 614.524 204.542 614.246 205.057C613.973 205.566 613.837 206.181 613.837 206.903ZM632.001 215.275C630.658 215.275 629.501 214.988 628.53 214.414C627.565 213.834 626.82 213.02 626.293 211.973C625.772 210.919 625.512 209.685 625.512 208.271C625.512 206.874 625.772 205.643 626.293 204.577C626.82 203.512 627.554 202.681 628.495 202.083C629.442 201.485 630.548 201.186 631.815 201.186C632.584 201.186 633.33 201.313 634.052 201.568C634.774 201.822 635.422 202.222 635.996 202.766C636.571 203.311 637.023 204.018 637.355 204.888C637.686 205.752 637.852 206.803 637.852 208.04V208.981H627.012V206.992H635.251C635.251 206.294 635.109 205.675 634.825 205.137C634.54 204.592 634.141 204.163 633.626 203.849C633.117 203.536 632.519 203.379 631.833 203.379C631.087 203.379 630.436 203.562 629.88 203.929C629.329 204.29 628.903 204.764 628.601 205.35C628.305 205.93 628.157 206.56 628.157 207.241V208.794C628.157 209.706 628.317 210.481 628.637 211.12C628.962 211.76 629.415 212.248 629.995 212.585C630.575 212.917 631.253 213.082 632.028 213.082C632.531 213.082 632.99 213.011 633.404 212.869C633.818 212.721 634.176 212.502 634.478 212.212C634.78 211.922 635.011 211.564 635.171 211.138L637.683 211.591C637.482 212.331 637.121 212.979 636.6 213.535C636.085 214.086 635.437 214.515 634.656 214.822C633.881 215.124 632.996 215.275 632.001 215.275ZM640.797 215V201.364H643.363V203.53H643.505C643.753 202.796 644.191 202.219 644.819 201.799C645.452 201.373 646.168 201.159 646.967 201.159C647.133 201.159 647.328 201.165 647.553 201.177C647.784 201.189 647.965 201.204 648.095 201.222V203.761C647.988 203.731 647.799 203.699 647.527 203.663C647.254 203.622 646.982 203.601 646.71 203.601C646.082 203.601 645.523 203.734 645.032 204C644.547 204.261 644.162 204.625 643.878 205.092C643.594 205.554 643.452 206.081 643.452 206.673V215H640.797ZM654.238 215.302C653.374 215.302 652.593 215.142 651.894 214.822C651.196 214.497 650.643 214.026 650.234 213.411C649.832 212.795 649.631 212.041 649.631 211.147C649.631 210.378 649.779 209.744 650.074 209.247C650.37 208.75 650.77 208.356 651.273 208.066C651.776 207.776 652.338 207.557 652.96 207.409C653.581 207.261 654.215 207.149 654.86 207.072C655.676 206.977 656.339 206.9 656.848 206.841C657.357 206.776 657.727 206.673 657.958 206.531C658.189 206.388 658.304 206.158 658.304 205.838V205.776C658.304 205.001 658.085 204.4 657.647 203.974C657.215 203.548 656.57 203.335 655.712 203.335C654.818 203.335 654.114 203.533 653.599 203.929C653.09 204.32 652.738 204.755 652.543 205.234L650.048 204.666C650.344 203.838 650.776 203.169 651.344 202.66C651.918 202.145 652.578 201.772 653.324 201.541C654.07 201.304 654.854 201.186 655.676 201.186C656.221 201.186 656.798 201.251 657.408 201.381C658.023 201.506 658.597 201.737 659.13 202.074C659.668 202.411 660.109 202.894 660.453 203.521C660.796 204.142 660.968 204.95 660.968 205.945V215H658.375V213.136H658.269C658.097 213.479 657.84 213.816 657.496 214.148C657.153 214.479 656.712 214.754 656.174 214.973C655.635 215.192 654.99 215.302 654.238 215.302ZM654.815 213.171C655.549 213.171 656.177 213.026 656.697 212.736C657.224 212.446 657.624 212.067 657.896 211.6C658.174 211.126 658.313 210.62 658.313 210.082V208.324C658.218 208.419 658.035 208.507 657.763 208.59C657.496 208.667 657.192 208.735 656.848 208.794C656.505 208.848 656.171 208.898 655.845 208.945C655.52 208.987 655.247 209.022 655.028 209.052C654.513 209.117 654.043 209.226 653.617 209.38C653.197 209.534 652.859 209.756 652.605 210.046C652.356 210.33 652.232 210.709 652.232 211.183C652.232 211.839 652.474 212.337 652.96 212.674C653.445 213.005 654.064 213.171 654.815 213.171ZM670.869 201.364V203.494H663.42V201.364H670.869ZM665.418 198.097H668.072V210.996C668.072 211.511 668.149 211.899 668.303 212.159C668.457 212.414 668.655 212.588 668.898 212.683C669.146 212.772 669.416 212.816 669.706 212.816C669.919 212.816 670.105 212.801 670.265 212.772C670.425 212.742 670.549 212.718 670.638 212.701L671.117 214.893C670.963 214.953 670.744 215.012 670.46 215.071C670.176 215.136 669.821 215.172 669.395 215.178C668.696 215.189 668.045 215.065 667.442 214.805C666.838 214.544 666.35 214.142 665.977 213.597C665.604 213.053 665.418 212.369 665.418 211.547V198.097ZM679.536 215.275C678.192 215.275 677.035 214.988 676.064 214.414C675.1 213.834 674.354 213.02 673.827 211.973C673.306 210.919 673.046 209.685 673.046 208.271C673.046 206.874 673.306 205.643 673.827 204.577C674.354 203.512 675.088 202.681 676.029 202.083C676.976 201.485 678.083 201.186 679.349 201.186C680.119 201.186 680.864 201.313 681.586 201.568C682.308 201.822 682.957 202.222 683.531 202.766C684.105 203.311 684.557 204.018 684.889 204.888C685.22 205.752 685.386 206.803 685.386 208.04V208.981H674.546V206.992H682.785C682.785 206.294 682.643 205.675 682.359 205.137C682.075 204.592 681.675 204.163 681.16 203.849C680.651 203.536 680.053 203.379 679.367 203.379C678.621 203.379 677.97 203.562 677.414 203.929C676.863 204.29 676.437 204.764 676.135 205.35C675.839 205.93 675.691 206.56 675.691 207.241V208.794C675.691 209.706 675.851 210.481 676.171 211.12C676.496 211.76 676.949 212.248 677.529 212.585C678.109 212.917 678.787 213.082 679.562 213.082C680.065 213.082 680.524 213.011 680.938 212.869C681.353 212.721 681.711 212.502 682.013 212.212C682.314 211.922 682.545 211.564 682.705 211.138L685.217 211.591C685.016 212.331 684.655 212.979 684.134 213.535C683.619 214.086 682.971 214.515 682.19 214.822C681.415 215.124 680.53 215.275 679.536 215.275Z"
                    fill="url(#paint0_linear_204_35)"
                />
                <path d="M505 191H8V417" stroke="#9AA9B6" strokeOpacity="0.2" />
                <circle
                    cx="511.5"
                    cy="190.5"
                    r="6.5"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                />
                <circle
                    cx="7.5"
                    cy="422.5"
                    r="6.5"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                />
                <circle
                    cx="568.5"
                    cy="260.5"
                    r="6.5"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                />
                <path
                    d="M568.5 267V339.5H435.5V418.5"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                />
                <circle
                    cx="435.5"
                    cy="424.5"
                    r="6.5"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                />
                <path
                    d="M754 227.5H1018V387.5H863V417"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                />
                <path
                    d="M754 227.5C754 231.09 751.09 234 747.5 234C743.91 234 741 231.09 741 227.5C741 223.91 743.91 221 747.5 221C751.09 221 754 223.91 754 227.5Z"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                />
                <circle
                    cx="863.5"
                    cy="424.5"
                    r="6.5"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                />
                <circle
                    cx="691.5"
                    cy="156.5"
                    r="6.5"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                />
                <path
                    d="M691.5 149.5V24.5H1010.5V124"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                />
                <path
                    d="M1010.5 123.5L1289 122.5"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                />
                <path
                    d="M1289 121.5V416"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                />
                <circle
                    cx="1288.5"
                    cy="423.5"
                    r="6.5"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                />
                <circle
                    cx="568.5"
                    cy="156.5"
                    r="6.5"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                />
                <circle
                    cx="266.5"
                    cy="7.5"
                    r="6.5"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                />
                <path
                    d="M569 150.5V82H266.5V13.5"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                />
                <circle
                    cx="691.5"
                    cy="260.5"
                    r="6.5"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                />
                <path
                    d="M692 267V344.5H755"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                />
                <circle
                    cx="762.5"
                    cy="344.5"
                    r="6.5"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                />
                <circle
                    cx="383.5"
                    cy="227.5"
                    r="6.5"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                />
                <path d="M390 227.5H505" stroke="#9AA9B6" strokeOpacity="0.2" />
                <circle
                    cx="511.5"
                    cy="227.5"
                    r="6.5"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                />
                <circle
                    cx="747.5"
                    cy="190.5"
                    r="6.5"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                />
                <path d="M754 190.5H869" stroke="#9AA9B6" strokeOpacity="0.2" />
                <circle
                    cx="875.5"
                    cy="190.5"
                    r="6.5"
                    stroke="#9AA9B6"
                    strokeOpacity="0.2"
                    strokeWidth="2"
                />
                <defs>
                    <linearGradient
                        id="paint0_linear_204_35"
                        x1="576"
                        y1="191"
                        x2="692.392"
                        y2="212.443"
                        gradientUnits="userSpaceOnUse"
                    >
                        <stop stopColor="#919191" />
                        <stop offset="0.1979" stopColor="#EAEAEA" />
                        <stop offset="0.3333" stopColor="#828181" />
                        <stop offset="0.7031" stopColor="#C6C6C6" />
                        <stop offset="1" stopColor="#606060" />
                    </linearGradient>
                </defs>
            </svg>

            <section className={styles.generatedItems}>
                {featureList.map((list) => (
                    <article key={list.title} className={styles.item}>
                        <div className={styles.itemIcon}>
                            <img
                                className={styles.itemImg}
                                src={list.img}
                                alt={list.title + " icon"}
                            />
                        </div>
                        <h3>{list.title}</h3>
                        <p>{list.description}</p>
                    </article>
                ))}
            </section>
        </Container>
    );
};

export default GeneratorFlow;
