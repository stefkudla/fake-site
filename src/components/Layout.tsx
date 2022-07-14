import Footer from './Footer'
import Header from './Header'

type LayoutProps = {
  children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => (
  <>
    <Header />
    <main className="max-w-8xl mx-auto min-h-[80vh] overflow-hidden">
      {children}
    </main>
    <Footer />
  </>
)
export default Layout
