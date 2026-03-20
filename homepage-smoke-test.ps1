$index = Get-Content -Path 'C:\Users\A\Desktop\AI\wangming-lab-site\index.html' -Raw
$styles = Get-Content -Path 'C:\Users\A\Desktop\AI\wangming-lab-site\styles.css' -Raw
$checks = @(
  @{ Name = 'homepage hero carousel'; Ok = $index -match 'id="heroSlides"' },
  @{ Name = 'logo placeholder'; Ok = $index -match 'id="labLogo"' },
  @{ Name = 'pi card'; Ok = $index -match 'class="pi-card"' },
  @{ Name = 'lab intro section'; Ok = $index -match 'id="lab-intro"' },
  @{ Name = 'research section'; Ok = $index -match 'id="research-directions"' },
  @{ Name = 'equipment section'; Ok = $index -match 'id="equipment"' },
  @{ Name = 'recruit section'; Ok = $index -match 'id="join-us"' },
  @{ Name = 'hero enhanced css'; Ok = $styles -match '\.hero-enhanced' },
  @{ Name = 'carousel css'; Ok = $styles -match '\.carousel-slide' },
  @{ Name = 'equipment grid css'; Ok = $styles -match '\.equipment-grid' }
)
$failed = $checks | Where-Object { -not $_.Ok }
if ($failed) {
  Write-Host 'FAILED CHECKS:'
  $failed | ForEach-Object { Write-Host ('- ' + $_.Name) }
  exit 1
}
Write-Host 'All homepage structure checks passed.'
