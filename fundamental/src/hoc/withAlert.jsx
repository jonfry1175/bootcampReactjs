import React from 'react'

// HOC = Higher Order Component, component yang membungkus component lainnya  
export const withAlert = (InnerComponent) => {
    class WrapperComponent extends React.Component {
        // alert sebelum children component muncul
        componentDidMount() {
            alert("component mounted!")
        }

        render() {
            return <InnerComponent {...this.props} propsTambahan="Halo aku props HOC"  />
        }
    }
    return WrapperComponent
}

